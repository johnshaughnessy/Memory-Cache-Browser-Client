# Memory Cache Browser Client

A browser client for [Memory Cache](https://github.com/Mozilla-Ocho/Memory-Cache).

## Overview

Memory Cache Browser Client is a frontend component of Memory Cache:

- It sends commands and displays information from [Memory Cache Hub](https://github.com/Mozilla-Ocho/Memory-Cache-Hub/).
- It allows users to view and manage project artifacts, llamafiles, and settings.
- It allows users to query LLMs using Retrieval Augmented Generation.
- It allows users to view and manage prompt templates and long-running background tasks.

## Installation

Memory Cache Browser Client is included in each release of Memory Cache Hub, so you do not need to install it separately.

To install Memory Cache Hub, follow the instructions in the [Memory Cache Hub README](https://github.com/Mozilla-Ocho/Memory-Cache-Hub/?tab=readme-ov-file#memory-cache-hub).

A Firefox browser extension for Memory Cache that extends its functionality is also available. More information can be found in the main [Memory Cache repository](https://github.com/Mozilla-Ocho/Memory-Cache).

If you want to build `memory-cache-browser-client` from source, you can follow the instructions in the sections below.

## Development

Memory Cache consists of three separate components:

- Memory Cache Hub
- Memory Cache Browser Client
- Memory Cache Firefox Extension

This repository contains the source code for the Memory Cache Browser Client.

Install prerequisites with:

``` sh
sudo corepack enable
yarn install
```

Run the development server with:

``` sh
yarn parcel src/index.html
```

The code for interacting with the Memory Cache Hub in `src/api` is generated from an [OpenAPI specification](https://swagger.io/specification/). To regenerate this code, make sure the Memory Cache Hub is running, and then run `scripts/regenerate_api.sh`.

### Working with Memory Cache Hub

There are three ways to work with Memory Cache Hub:

- By default, a release build of Memory Cache Hub will serve its internal build of Memory Cache Browser Client.
- Alternatively, you can start Memory Cache Hub with a `--client-path` argument pointing to the `build` directory of Memory Cache Browser Client.
- You can also run Memory Cache Browser Client in development mode (`npm start`), and it will use the api routes of Memory Cache Hub running on `http://localhost:4444`.

While you are developing Memory Cache Browser Client, the third option is the most convenient. 

Once you are satisfied with your changes, you can test them with a release build of Memory Cache Hub by running `npm run build` and targeting the `build` directory with the `--client-path` argument to Memory Cache Hub.

Further instructions for building releases are in the [Memory Cache Hub README](https://github.com/Mozilla-Ocho/Memory-Cache-Hub/?tab=readme-ov-file#memory-cache-hub)

### TODO

- [x] Add llamafile management to the client
- [x] Fix selection in client sidebar
- [x] Add delete project button
- [x] Reduce indirection in API request params
- [x] Redo ingestion to support "ProjectDirectory"s
- [x] Add rag ask api to the client
- [ ] Create job queue for each project and allow users to view and manage jobs.
- [ ] Support updating/changing project settings (name, directories, etc).

## Job Queues

A project has a queue of jobs. Each job has a series of tasks that are executed in order. 

For example:
- Ingest project files. This job will replace old copies of project files and document fragments, copy from the source directories, chunk the files and put the fragments into the chroma db. 
- Generate summaries. The job will generate summaries for all the documents in the project. Summarizing each document is its own task.
- Thread. This is a job for a chat. Each reply becomes a task. Each reply can be augmented with fragments or not.
- Rag Chat. This is a task in a Thread job will run a chroma query to augment a prompt, then run the prompt through the model and save the results.
- Retrieve. This is a one-off task that will run a chroma query to retrieve documents and save the results. 

