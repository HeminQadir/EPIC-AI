import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

const TEAM_EMAILS = [
  "kjetil.sunde@medisin.uio.no",
  "UXKJSU@ous-hf.no",
  "kristian.bernhard.nilsen@ous-hf.no",
  "hemqad@ous-hf.no",
  "naines@ous-hf.no",
  "haugud@ous-hf.no",
  "UXWIMH@ous-hf.no",
  "linbed@ous-hf.no",
  "ilangko.balasingham@ntnu.no",
  "i.s.balasingham@ous-research.no",
  "uxgend@ous-hf.no",
  "p.s.halvorsen@medisin.uio.no",
  "sthalvor@ous-hf.no",
  "a.c.lundqvist@medisin.uio.no",
  "UXNAES@ous-hf.no"
];

export async function registerRoutes(app: Express): Promise<Server> {
  app.post("/api/contact", async (req, res) => {
    try {
      const { name, email, institution, message } = req.body;

      if (!name || !email || !message) {
        return res.status(400).json({ error: "Missing required fields" });
      }

      // TODO: When Resend integration is set up, use it to send emails
      // For now, we'll just log the contact form submission
      console.log("Contact form submission:", {
        name,
        email,
        institution,
        message,
        recipients: TEAM_EMAILS
      });

      // Placeholder for Resend email sending
      // const resend = new Resend(process.env.RESEND_API_KEY);
      // await resend.emails.send({
      //   from: 'EPIC-AI Contact <noreply@your-domain.com>',
      //   to: TEAM_EMAILS,
      //   subject: `New Contact Form Submission from ${name}`,
      //   html: `
      //     <h2>New Contact Form Submission</h2>
      //     <p><strong>Name:</strong> ${name}</p>
      //     <p><strong>Email:</strong> ${email}</p>
      //     <p><strong>Institution:</strong> ${institution || 'N/A'}</p>
      //     <p><strong>Message:</strong></p>
      //     <p>${message}</p>
      //   `
      // });

      res.json({ success: true, message: "Contact form submitted successfully" });
    } catch (error) {
      console.error("Error processing contact form:", error);
      res.status(500).json({ error: "Failed to process contact form" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
