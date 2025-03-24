# LiveKit Agents Playground with NextJS App Router Frontend

<!--BEGIN_DESCRIPTION-->
This repo is the App Router NextJS version of LiveKit's [Agents Playground](https://github.com/livekit/agents-playground).
Versus their Pages Router NextJS repo. There may be other changes such as using yarn instead of npm. See their repo for more details.

The Agent Playground is designed for quickly prototyping with server side agents built with [LiveKit Agents Framework](https://github.com/livekit/agents). Easily tap into LiveKit WebRTC sessions and process or generate audio, video, and data streams.
  The playground includes components to fully interact with any LiveKit agent, through video, audio and chat.
<!--END_DESCRIPTION-->

## Docs and references

Docs for how to get started with LiveKit agents at [https://docs.livekit.io/agents](https://docs.livekit.io/agents)

The repo containing the (server side) agent implementations (including example agents): [https://github.com/livekit/agents](https://github.com/livekit/agents)

## Try out a live version

You can try out a demo of the playground with [KITT](https://kitt.livekit.io) or the [hosted playground](https://agents-playground.livekit.io) for your own agents.

## Setting up the playground locally

1. Install dependencies

```bash
  yarn install
```

2. Copy and rename the `.env.example` file to `.env.local` and fill in the necessary environment variables.

```
LIVEKIT_API_KEY=<your API KEY>
LIVEKIT_API_SECRET=<Your API Secret>
NEXT_PUBLIC_LIVEKIT_URL=wss://<Your Cloud URL>
```

3. Run the development server:

```bash
  yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
5. If you haven't done so yet, start your agent (with the same project variables as in step 2.)
6. Connect to a room and see your agent connecting to the playground

## Features

- Render video, audio and chat from your agent
- Send video, audio, or text to your agent
- Configurable settings panel to work with your agent

## Let's chat

Feel free to ask questions, request features in my [discord](https://discord.gg/v6nj7dShND).
