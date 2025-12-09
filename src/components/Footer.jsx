"use client";

import { Github, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <footer className="bg-muted  border-t border-border/50 px-6 py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* BRAND */}
        <div>
            <img className="h-24 aspect-square" src="/logo.png" alt="company logo" />
          <p className="mt-2  text-sm">
            Building scalable digital solutions with passion and precision.
          </p>
        </div>

        {/* CONTACT INFO */}
        <div className="flex flex-1 flex-col gap-4">
          <h4 className="font-semibold text-gray-900 dark:text-white">Reach Us</h4>

          <div className="flex gap-3 items-center">
            <Mail className="w-5 h-5 text-primary" />
            <span className="text-gray-600 dark:text-gray-400">
              contact@consilotech.com
            </span>
          </div>

          <div className="flex gap-3 items-center">
            <Phone className="w-5 h-5 text-primary" />
            <span className="text-gray-600 dark:text-gray-400">
              +91 98765 43210
            </span>
          </div>

          <div className="flex gap-3 items-start">
            <MapPin className="w-5 h-5 text-primary" />
            <span className="text-gray-600 dark:text-gray-400">
              Gujarat, India <br /> Remote Worldwide
            </span>
          </div>
        </div>

     

        {/* SOCIAL */}
        <div className="flex flex-col gap-4">
          <h4 className="font-semibold text-gray-900 dark:text-white">Connect</h4>
          <div className="flex gap-4">
            <Button variant="ghost" size="icon" asChild>
              <a href="https://github.com/consilotech" target="_blank">
                <Github className="w-5 h-5 text-gray-600 dark:text-gray-300 hover:text-primary" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="https://linkedin.com/company/consilotech" target="_blank">
                <Linkedin className="w-5 h-5 text-gray-600 dark:text-gray-300 hover:text-primary" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="mailto:info@consilotech.com">
                <Mail className="w-5 h-5 text-gray-600 dark:text-gray-300 hover:text-primary" />
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="mt-10 text-center text-gray-500 dark:text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} Consilo-Tech. All rights reserved.
      </div>
    </footer>
  );
}
