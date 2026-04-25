import { Component } from '@angular/core';

@Component({
  selector: 'app-chat-panel',
  template: `
    <div class="h-full py-6 px-2">
      <div class="flex flex-col gap-6 h-full">
        <!-- User info -->
        <div class="flex justify-between items-center px-2">
          <!-- User -->
          <div class="flex gap-3">
            <img
              src="https://cdn-icons-png.flaticon.com/512/6858/6858504.png"
              alt=""
              class="rounded-full w-14 h-14"
            />
            <div>
              <h2 class="text-xl font-medium">Morris Warren</h2>
              <p class="text-sm text-gray-500">Online</p>
            </div>
          </div>

          <!-- User actions -->
          <div class="flex gap-3">
            <button class="p-2 rounded-full bg-gray-100 hover:bg-gray-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-4"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                />
              </svg>
            </button>
            <button class="p-2 rounded-full bg-gray-100 hover:bg-gray-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-4"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
            </button>
            <button class="p-2 rounded-full bg-gray-100 hover:bg-gray-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-4"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                />
              </svg>
            </button>
          </div>
        </div>
        <!-- Chat messages -->
        <div class="relative bg-gray-100 flex-auto rounded-xl p-4">
          <div class="flex justify-center">
            <p class="bg-white px-6 py-2 rounded-2xl text-xs text-gray-400">24 de Mayo</p>
          </div>

          <div>
            <div class="bg-white px-4 py-2 rounded-2xl max-w-xs mt-4">
              <p class="text-sm">Hey! How are you doing?</p>
              <span class="text-xs text-gray-400">2:30 PM</span>
            </div>

            <div class="bg-blue-500 text-white px-4 py-2 rounded-2xl max-w-xs mt-4 ml-auto">
              <p class="text-sm">I'm good, thanks! How about you?</p>
              <span class="text-xs text-gray-200">2:32 PM</span>
            </div>
          </div>

          <div class="absolute bottom-4 left-4 bg-white w-[calc(100%-2rem)]">
            <input
              type="text"
              placeholder="Type your message..."
              class="w-full px-4 py-2 rounded-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
      </div>
    </div>
  `,
})
export class ChatPanelComponent {}
