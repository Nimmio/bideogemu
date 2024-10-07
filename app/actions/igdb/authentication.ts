"use server";
import prisma from "@/lib/db";
import { authenticationResponse } from "@/types/igdb/authentication";
import { error } from "console";
import dayjs from "dayjs";

export async function checkAuthenticationOrGetNew() {
  if (await isAuthenticationStillValid()) {
    console.log("authentication is Valid");
    return;
  }
  await getNewAuthentication();
}

async function isAuthenticationStillValid(): Promise<boolean> {
  "use server";
  if (await isAuthenticatedDataIsNull()) return false;
  if (await isAuthenticatenDataExpired()) return false;
  return true;
}

async function isAuthenticatedDataIsNull(): Promise<boolean> {
  "use server";
  if ((await getCurrentAutheticationData()) === null) return true;
  return false;
}

async function isAuthenticatenDataExpired(): Promise<boolean> {
  "use server";
  const authenticateData = await getCurrentAutheticationData();
  if (authenticateData === null) throw error;
  const { expiresInSecond, updatedAt } = authenticateData;
  const expireDate = dayjs(updatedAt).add(expiresInSecond, "seconds");

  return dayjs().isAfter(expireDate);
}

export async function getCurrentAutheticationData() {
  "use server";
  const authenticateData = await prisma.igdbAuthentication.findFirst({});
  return authenticateData;
}

async function getNewAuthentication() {
  "use server";
  const clientId = process.env.IGDB_CLIENT_ID;
  const clientSecret = process.env.IGDB_CLIENT_ID;

  if (clientId === undefined || clientId === undefined) throw error;

  const response = await fetch(
    `https://id.twitch.tv/oauth2/token?client_id=${clientId}&client_secret=${clientSecret}&grant_type=client_credentials`,
    {
      method: "POST",
    }
  );
  const responseData = await response.json();
  await saveAuthenticationDataToDB(responseData);
}

async function saveAuthenticationDataToDB({
  expires_in,
  access_token,
}: authenticationResponse) {
  "use server";

  await prisma.igdbAuthentication.upsert({
    where: {
      id: 1,
    },
    update: {
      expiresInSecond: expires_in,
      token: access_token,
    },
    create: {
      id: 1,
      expiresInSecond: expires_in,
      token: access_token,
    },
  });
}
