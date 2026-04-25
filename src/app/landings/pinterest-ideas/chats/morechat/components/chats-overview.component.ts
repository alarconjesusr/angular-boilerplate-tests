import { Component } from '@angular/core';

@Component({
  selector: 'app-chats-overview',
  template: `
    <div class="p-6">
      <div class="flex gap-4">
        <input
          type="text"
          class="border border-gray-300 rounded-md p-2 w-full"
          placeholder="Search chats..."
        />
        <button class="bg-amber-200 p-2 rounded-md">Add</button>
      </div>

      <!-- Tabs -->
      <div class="flex gap-10 mt-3">
        <button class="text-gray-800 text-sm">All</button>
        <button class="text-gray-400 text-sm">Design</button>
        <button class="text-gray-400 text-sm">Marketing</button>
        <button class="text-gray-400 text-sm">Planing Team</button>
      </div>

      <!-- Stories -->
      <div class="mt-5 flex flex-col gap-4">
        <header class="text-xl font-medium">Stories</header>
        <div class="flex gap-4">
          <div class="flex flex-col items-center gap-2">
            <img
              src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=808&auto=format&fit=crop&q=80"
              alt="Ana López"
              class="w-20 h-28 object-cover rounded-xl"
            />
            <p class="text-xs">Ana López</p>
          </div>
          <div class="flex flex-col items-center gap-2">
            <img
              src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=808&auto=format&fit=crop&q=80"
              alt="Carlos Méndez"
              class="w-20 h-28 object-cover rounded-xl"
            />
            <p class="text-xs">Carlos Méndez</p>
          </div>
          <div class="flex flex-col items-center gap-2">
            <img
              src="https://e00-telva.uecdn.es/assets/multimedia/imagenes/2023/08/28/16932210046798.jpg"
              alt="María Pérez"
              class="w-20 h-28 object-cover rounded-xl"
            />
            <p class="text-xs">María Pérez</p>
          </div>
          <div class="flex flex-col items-center gap-2">
            <img
              src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=808&auto=format&fit=crop&q=80"
              alt="Luisa García"
              class="w-20 h-28 object-cover rounded-xl"
            />
            <p class="text-xs">Luisa García</p>
          </div>
        </div>
      </div>

      <!-- Chats -->
      <div class="mt-5 flex flex-col gap-2">
        <header class="text-xl font-medium">Chats</header>
        <div>
          <div class="flex items-center gap-4 py-3 rounded-md">
            <img
              src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=808&auto=format&fit=crop&q=80"
              alt="Ana López"
              class="w-12 h-10 object-cover rounded-full"
            />
            <div class="w-full">
              <div class="flex justify-between gap-2">
                <p class="font-medium">Ana López</p>
                <p class="text-sm text-gray-500">12:34 PM</p>
              </div>
              <p class="text-sm text-gray-500">Hey, how are you?</p>
            </div>
          </div>
          <div class="flex items-center gap-4 py-3 rounded-md">
            <img
              src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=808&auto=format&fit=crop&q=80"
              alt="Carlos Méndez"
              class="w-12 h-10 object-cover rounded-full"
            />
            <div class="w-full">
              <div class="flex justify-between gap-2">
                <p class="font-medium">Carlos Méndez</p>
                <p class="text-sm text-gray-500">12:34 PM</p>
              </div>
              <p class="text-sm text-gray-500">Are we still on for tomorrow?</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class ChatsOverviewComponent {}
