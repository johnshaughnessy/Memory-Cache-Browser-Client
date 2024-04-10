import React from "react";
import { useContext, useEffect, useState } from "react";
import { ProjectContext } from "./ProjectContext";

function LlamafileInfoRow({ llamafile }) {
  const { llamafileApi } = useContext(ProjectContext);
  const [status, setStatus] = useState("idle");
  const [downloadProgress, setDownloadProgress] = useState(0);

  function randomStatus() {
    const statuses = ["idle", "downloading", "absent", "running", "error"];
    return statuses[Math.floor(Math.random() * statuses.length)];
  }

  async function getLlamafileStatus() {
    setStatus("loading");
    try {
      const response =
        await llamafileApi.checkLlamafileStatusApiV1CheckLlamafileStatusPost({
          llamafileFilename: llamafile.filename,
        });
      setStatus(response.status);
      if (response.status === "downloading") {
        setDownloadProgress(response.progress);
      }
    } catch (error) {
      setStatus("error");
    }
  }

  useEffect(() => {
    getLlamafileStatus();
  }, [llamafile.name, llamafileApi]);

  // If the status is "downloading, then check the status every second"
  useEffect(() => {
    if (status === "downloading") {
      const interval = setInterval(() => {
        getLlamafileStatus();
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [status]);

  async function download() {
    await llamafileApi.downloadLlamafileByNameApiV1DownloadLlamafileByNamePost({
      llamafileFilename: llamafile.filename,
    });
    getLlamafileStatus();
  }

  async function start() {
    await llamafileApi.apiStartLlamafileApiV1StartLlamafilePost({
      llamafileFilename: llamafile.filename,
    });
    getLlamafileStatus();
  }

  async function stop() {
    await llamafileApi.apiStopLlamafileApiV1StopLlamafilePost({
      llamafileFilename: llamafile.filename,
    });
    getLlamafileStatus();
  }

  async function retry() {
    await stop();
    await start();
  }

  async function remove() {
    await llamafileApi.apiDeleteLlamafileApiV1DeleteLlamafileDelete({
      llamafileFilename: llamafile.filename,
    });
    getLlamafileStatus();
  }

  async function getDownloadStatus() {
    return null;
  }

  async function cancelDownload() {
    return null;
  }

  // Llamafile status is one of: "idle", "downloading", "absent", "running", "error"
  // If the status is "absent", show a download button
  // If the status is "running", show a stop button
  // If the status is "error", show a retry button
  // If the status is "idle", show a run button and a delete button
  // If the status is "downloading", show a spinner and a cancel button

  return (
    <tr>
      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
        {llamafile.model}
      </td>
      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
        {llamafile.size}
      </td>
      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
        {llamafile.filename}
      </td>
      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
        {status}
      </td>

      {status === "absent" && (
        <td>
          <button
            type="button"
            onClick={download}
            className="rounded-md bg-indigo-600 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Download
          </button>
        </td>
      )}

      {status === "running" && (
        <td>
          <button
            type="button"
            onClick={stop}
            className="rounded-md bg-indigo-600 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Stop
          </button>
        </td>
      )}

      {status === "error" && (
        <td>
          <button
            type="button"
            onClick={retry}
            className="rounded-md bg-indigo-600 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Retry
          </button>
        </td>
      )}

      {status === "idle" && (
        <td>
          <button
            type="button"
            onClick={start}
            className="rounded-md bg-indigo-600 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Run
          </button>
          <button
            type="button"
            onClick={remove}
            className="rounded-md bg-indigo-600 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Delete
          </button>
        </td>
      )}

      {status === "downloading" && (
        <td>
          <h2>{downloadProgress}</h2>
          <button
            type="button"
            onClick={cancelDownload}
            className="rounded-md bg-indigo-600 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Cancel
          </button>
        </td>
      )}
    </tr>
  );
}

function Models() {
  const { llamafileApi } = useContext(ProjectContext);
  const [llamafiles, setLlamafiles] = useState([]);
  useEffect(() => {
    async function getLlamafiles() {
      try {
        const response =
          await llamafileApi.listLlamafilesApiV1ListLlamafilesGet();
        setLlamafiles(response);
      } catch (error) {
        console.error(error);
      }
    }
    getLlamafiles();
  }, [llamafileApi]);

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-base font-semibold leading-6 text-gray-900">
            Llamafiles
          </h1>
          <p className="mt-2 text-sm text-gray-700">
            Llamafiles are programs that run large language models. Memory Cache
            downloads and runs llamafiles locally on your computer.
          </p>
        </div>
      </div>
      <div className="mt-8 flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <table className="min-w-full divide-y divide-gray-300">
              <thead>
                <tr>
                  <th
                    scope="col"
                    className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
                  >
                    Name
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    Size
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    Filename
                  </th>

                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    Status
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                  >
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {llamafiles.map((llamafile) => (
                  <LlamafileInfoRow
                    key={llamafile.filename}
                    llamafile={llamafile}
                  />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Models;
