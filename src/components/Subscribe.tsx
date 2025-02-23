"use client";

import { createSignal, Show } from "solid-js"
import { MessageSquare, Mail, Loader2, Check } from 'lucide-solid'

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

export default function Subscribe() {
  const [selected, setSelected] = createSignal<"whatsapp" | "email">("whatsapp")
  const [loading, setLoading] = createSignal(false)

  const handleSelect = (type: "whatsapp" | "email") => {
    setSelected(type)
    setLoading(true)
    setTimeout(() => setLoading(false), 2000)
  }

  function gtag(arg0: string, arg1: string, arg2: { event_category: string; event_label: string; }) {
    throw new Error("Function not implemented.");
  }

  return (
    <div class="space-y-8">
      <div class="space-y-3">
        <h1 class="text-2xl font-medium text-black dark:text-white">
          Select the channel where you're most likely to read and reflect.
        </h1>
        <p class="text-sm opacity-75">
          Every Sunday, we share stories and insights that will transform your relationship with food. 
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <button 
          onClick={() => handleSelect("whatsapp")}
          class={`group p-6 rounded-lg border-2 transition-all ${
            selected() === "whatsapp" 
              ? "border-green-500 bg-green-50 dark:bg-green-900/20" 
              : "border-black/10 dark:border-white/20 hover:bg-green-50/50 dark:hover:bg-green-900/10 hover:border-green-500/50"
          }`}
        >
          <div class="flex items-center gap-4">
            <div class="relative">
              <div class="absolute -right-0 -top-0">
                <span class={`flex h-3 w-3 ${selected() === "whatsapp" ? "opacity-100" : "opacity-0"} transition-opacity group-hover:opacity-100`}>
                  <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span class="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </span>
              </div>
              <MessageSquare size={48} class="text-green-600 dark:text-green-400" />
            </div>
            <div class="text-left">
              <p class="font-medium text-black dark:text-white">WhatsApp</p>
              <p class="text-sm opacity-75">Perfect for reading with your morning tea</p>
            </div>
          </div>
        </button>

        <button 
          onClick={() => handleSelect("email")}
          class={`group p-6 rounded-lg border-2 transition-all ${
            selected() === "email"
              ? "border-blue-500 bg-blue-50 dark:bg-blue-900/20"
              : "border-black/10 dark:border-white/20 hover:bg-blue-50/50 dark:hover:bg-blue-900/10 hover:border-blue-500/50"
          }`}
        >
          <div class="flex items-center gap-4">
            <div class="relative">
              <div class="absolute -right-1 -top-0">
                <span class={`flex h-3 w-3 ${selected() === "email" ? "opacity-100" : "opacity-0"} transition-opacity group-hover:opacity-100`}>
                  <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span class="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
                </span>
              </div>
              <Mail size={48} class="text-blue-600 dark:text-blue-400" />
            </div>
            <div class="text-left">
              <p class="font-medium text-black dark:text-white">Email</p>
              <p class="text-sm opacity-75">Save and revisit anytime</p>
            </div>
          </div>
        </button>
      </div>

      <div class="space-y-4">
        <div class="flex flex-col gap-3 text-sm">
          <div class="flex items-start gap-2">
            <Check size={16} class="mt-1 text-green-600 dark:text-green-400 flex-shrink-0" />
            <p>Every Sunday, discover how ancient wisdom meets modern science</p>
          </div>
          <div class="flex items-start gap-2">
            <Check size={16} class="mt-1 text-green-600 dark:text-green-400 flex-shrink-0" />
            <p>Practical tips you can implement today for better health</p>
          </div>
          <div class="flex items-start gap-2">
            <Check size={16} class="mt-1 text-green-600 dark:text-green-400 flex-shrink-0" />
            <p>Stories that will change how you think about food and tradition</p>
          </div>
          <div class="flex items-start gap-2">
            <Check size={16} class="mt-1 text-green-600 dark:text-green-400 flex-shrink-0" />
            <p>Easy unsubscribe anytime (though we hope our content keeps you engaged)</p>
          </div>
        </div>

        <div class="relative">
          <Show when={loading()}>
            <div class="absolute inset-0 z-10 flex items-center justify-center bg-gray-100 dark:bg-gray-800 rounded-lg">
              <Loader2 size={24} class="animate-spin" />
            </div>
          </Show>

          <Show when={selected() === "whatsapp"}>
            <iframe 
              src="https://tally.so/embed/mV41pE?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
              class="w-full rounded-lg"
              style={{ height: "300px" }}
              title="Join on WhatsApp"
              onLoad={() => {
                if (window.gtag) {
                  gtag("event", "subscribe_form_viewed", {
                    event_category: "conversion",
                    event_label: "whatsapp",
                  });
                }
              }}
            />
          </Show>

          <Show when={selected() === "email"}>
            <iframe
              src="https://tally.so/embed/wb6452?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
              class="w-full rounded-lg"
              style={{ height: "300px" }}
              title="Join on email"
              onLoad={() => {
                if (window.gtag) {
                  gtag("event", "subscribe_form_viewed", {
                    event_category: "conversion",
                    event_label: "email",
                  });
                }
              }}
            />
          </Show>

        </div>
      </div>
    </div>
  )
}