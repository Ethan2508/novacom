"use client";

/**
 * Route /studio — Sanity Studio embarqué
 * Interface d'administration pour la cliente
 */

import { NextStudio } from "next-sanity/studio";
import config from "../../../../sanity.config";

export default function StudioPage() {
  return <NextStudio config={config} />;
}
