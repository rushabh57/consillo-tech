"use client";

import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 px-6 py-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        {/* Logo / Name */}
        <div className="text-xl font-bold text-gray-900 dark:text-white">
          Consilo-Tech
        </div>

        {/* Links */}
        <div className="flex space-x-6">
          <a href="/about" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
            About
          </a>
          <a href="/services" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
            Services
          </a>
          <a href="/contact" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
            Contact
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex space-x-4">
          <Button variant="ghost" asChild>
            <a href="https://github.com/consilotech" target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5 text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white" />
            </a>
          </Button>
          <Button variant="ghost" asChild>
            <a href="https://linkedin.com/company/consilotech" target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-5 h-5 text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white" />
            </a>
          </Button>
          <Button variant="ghost" asChild>
            <a href="mailto:info@consilotech.com">
              <Mail className="w-5 h-5 text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white" />
            </a>
          </Button>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-6 text-center text-gray-500 dark:text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} Consilo-Tech. All rights reserved.
      </div>
    </footer>
  );
}
