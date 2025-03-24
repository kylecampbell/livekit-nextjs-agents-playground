import { generateRandomAlphanumeric } from "@/lib/util";

import { AccessToken } from "livekit-server-sdk";
import type { AccessTokenOptions, VideoGrant } from "livekit-server-sdk";
import { TokenResult } from "@/lib/types";
import { NextResponse } from "next/server";

const apiKey = process.env.LIVEKIT_API_KEY;
const apiSecret = process.env.LIVEKIT_API_SECRET;

const createToken = (userInfo: AccessTokenOptions, grant: VideoGrant) => {
  const at = new AccessToken(apiKey, apiSecret, userInfo);
  at.addGrant(grant);
  return at.toJwt();
};

export async function GET(request: Request) {
  try {
    if (!apiKey || !apiSecret) {
      return new NextResponse("Environment variables aren't set up correctly", {
        status: 500,
      });
    }

    // Get URL to parse query parameters
    const { searchParams } = new URL(request.url);

    // Get room name from query params or generate random one
    const roomName =
      searchParams.get("roomName") ||
      `room-${generateRandomAlphanumeric(4)}-${generateRandomAlphanumeric(4)}`;

    // Get participant name from query params or generate random one
    const identity =
      searchParams.get("participantName") ||
      `identity-${generateRandomAlphanumeric(4)}`;

    const grant: VideoGrant = {
      room: roomName,
      roomJoin: true,
      canPublish: true,
      canPublishData: true,
      canSubscribe: true,
    };

    const token = await createToken({ identity }, grant);
    const result: TokenResult = {
      identity,
      accessToken: token,
    };

    return NextResponse.json(result);
  } catch (e) {
    return new NextResponse((e as Error).message, { status: 500 });
  }
}
