import {
  Body,
  Button,
  Column,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";

interface EmailProps {
  name: string;
  email: string;
}

const links = [
  { id: 1, name: "Messenger", link: "https://www.m.me/233077853232049" },
  {
    id: 2,
    name: "Viber",
    link: "https://invite.viber.com/?g2=AQBnSxdLtdX2NlLdaP2OIcnaTpnQ5U3hyUMODs1OtkBMTXcgGHFZygSxCluEOag%2F",
  },
  {
    id: 3,
    name: "TikTok",
    link: "https://www.tiktok.com/@digitalsphere_burma",
  },
];

export const EmailTemplate = ({ name, email }: EmailProps) => (
  <Html>
    <Head />
    <Preview>Transforming Digitally, Together</Preview>
    <Body style={main}>
      <Container style={container}>
        <Img
          src="https://ibb.co/6mwBxpT"
          width="170"
          height="50"
          alt="Digital Sphere Logo"
          style={logo}
        />
        <Text style={paragraph}>Hi {name},</Text>
        <Text style={paragraph}>
          Welcome to Digital Sphere, your best digital partner in the mordern
          world.
        </Text>
        <Section style={btnContainer}>
          <Button style={button} href="https://www.digitalsphere-burma.com">
            Get started
          </Button>
        </Section>
        <Section className="mt-45">
          <Row>
            {links.map((link) => (
              <Column key={link.id}>
                <Link
                  className="text-[black] underline font-bold"
                  href={link.link}
                >
                  {link.name}
                </Link>
                <span className="text-primary">→</span>
              </Column>
            ))}
          </Row>
        </Section>
        <Text style={paragraph}>
          {"We're excited to have you on board!,"}
          <br />
          Digital Sphere
        </Text>
        <Hr style={hr} />
        <Text style={footer}>© 2024 Digital Sphere. All rights reserved.</Text>
      </Container>
    </Body>
  </Html>
);

const main = {
  backgroundColor: "#e1e1e1",
  fontFamily: '"DM Sans", sans-serif',
};

const container = {
  margin: "0 auto",
  padding: "20px 0 48px",
};

const logo = {
  margin: "0 auto",
};

const paragraph = {
  fontSize: "16px",
  lineHeight: "26px",
};

const btnContainer = {
  textAlign: "center" as const,
};

const button = {
  backgroundColor: "#5F51E8",
  borderRadius: "3px",
  color: "#fff",
  fontSize: "16px",
  textDecoration: "none",
  textAlign: "center" as const,
  display: "block",
  padding: "12px",
};

const hr = {
  borderColor: "#fcb914",
  margin: "17px 0",
};

const footer = {
  color: "#bfbfbf",
  fontSize: "12px",
};
