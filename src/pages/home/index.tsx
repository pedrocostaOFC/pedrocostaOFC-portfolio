// Styles
import { Container, Flex } from "@/styles/Global";
import { Text } from "@/styles/Text";
import { Button } from "@/styles/Buttons";

// Components
import { Stack } from "@/components/Stack";
import { Project } from "@/components/Project";
import { Contacts } from "@/components/Contacts";

// Data
import { stackData } from "@/utils/stackData";
import { userData } from "@/utils/userData";

import { FaGithub } from "react-icons/fa";

// Page Style
import {
  Header,
  HeaderContent,
  HeaderContentAbout,
  HeaderButtonsArea,
  UserImage,
  StackCards,
  ProjectsArea,
  ProjectsAreaSocialMediaMessage,
  ProjectAreaWrapperColumns,
  ProjectsAreaContent,
  ProjectsAreaContentVercel,
  ProjectVercelStyle,
  ProjectVercelLiStyle
} from "./style";

export const Home = (): JSX.Element => {
  const gihubUrl = `https://github.com/${userData.githubUser}`;
  const portfolioUrl = `https://github.com/pedrocostaOFC/pedrocostaOFC-portfolio`;

  return (
    <main id="home">
      <Header>
        <Container>
          <HeaderContent>
            <Flex>
              <UserImage
                src={`https://github.com/${userData.githubUser}.png`}
                alt={userData.nameUser}
                title={userData.nameUser}
                width={"48px"}
                height={"48px"}
              />
              <Text color="grey4">Hello, my name is {userData.nameUser}</Text>
            </Flex>
            <Text as="h1" type="heading1" color="grey5">
              I'm a{" "}
              <Text as="span" type="heading1" color="brand1">
                web
              </Text>{" "}
              developer{" "}
              <Text as="span" type="heading1" color="brand1">
                <br />Full-
              </Text>{" "}
              Stack.
            </Text>
            <Text type="body1" color="grey2">
              Discover here in this environment, created especially for you, all
              my projects and technologies
            </Text>
            <HeaderButtonsArea>
              <Button as="a" type="primary" href="#projects">
                See Projects
              </Button>
              <Button as="a" type="outline" target="_blank" href={portfolioUrl}>
                See my portfolio source code
              </Button>
              <Button
                color="grey5"
                as="a"
                css={{ "&:hover": { color: "$grey1" } }}
                type="circle"
                target="_blank"
                href={gihubUrl}
              >
                <FaGithub />
              </Button>
            </HeaderButtonsArea>
            <StackCards>
              {stackData.map((stack, index) => (
                <Stack key={index} title={stack.title} icon={stack.img} />
              ))}
            </StackCards>
          </HeaderContent>
        </Container>
      </Header>
      <ProjectsArea id="projects">
        <Container>
          <ProjectAreaWrapperColumns>
            <ProjectsAreaSocialMediaMessage>
              <Text as="h2" type="heading1" color="grey4">
                My projects
              </Text>
              <Text as="p" type="body1" color="grey2">
                Some of my{" "}
                <Text as="span" color="brand5">
                  side projects
                </Text>
              </Text>
            </ProjectsAreaSocialMediaMessage>
            <ProjectsAreaContent>
              <Project />
            </ProjectsAreaContent>
          </ProjectAreaWrapperColumns>
        </Container>
      </ProjectsArea>
      <ProjectsArea id="projects">
        <Container>
          <ProjectAreaWrapperColumns>
            <ProjectsAreaSocialMediaMessage>
              <Text as="h2" type="heading1" color="grey4">
                Projects in Vercel
                <br />
              </Text>

            </ProjectsAreaSocialMediaMessage>
            <ProjectsAreaContentVercel>
              <ProjectVercelStyle>
                <ProjectVercelLiStyle className="projectVercelLi"><a href="https://capstone-ecommerce-pedrocosta-ofc.vercel.app/" target="_blank"><img src="https://res.cloudinary.com/dtdq5o9pe/image/upload/v1690295420/ecomerce_sq8wfh.png" alt="" /></a>
                  <Text type="body3" color="grey2">
                    Link GitHub: <a type="body3" href="https://github.com/pedrocostaOFC/capstone-ecommerce-pedrocostaOFC" target="_blank">Repository</a></Text>
                </ProjectVercelLiStyle>
                <ProjectVercelLiStyle className="projectVercelLi"><a href="https://kenzie-hub-complet-app.vercel.app/" target="_blank"><img src="https://res.cloudinary.com/dtdq5o9pe/image/upload/v1690295419/hub-hub_vkmkat.png" alt="" /></a>
                  <Text type="body3" color="grey2">
                    Link GitHub: <a href="https://github.com/Kenzie-Academy-Brasil-Developers/pedrocostaOFC-Kenzie-Academy-Brasil-Developers-react-entrega-kenzie-hub/tree/main/kenzie-hub-complet-app" target="_blank">Repository</a></Text>
                </ProjectVercelLiStyle>
                <ProjectVercelLiStyle className="projectVercelLi"><a href="https://nu-kenzie-iota-kohl.vercel.app/" target="_blank"><img src="https://res.cloudinary.com/dtdq5o9pe/image/upload/v1690295420/nu-kenzie_tuc9ax.png" alt="" /></a>
                  <Text type="body3" color="grey2">
                    Link GitHub: <a type="body3" href="https://github.com/Kenzie-Academy-Brasil-Developers/pedrocostaOFC-Kenzie-Academy-Brasil-Developers-react-entrega-s1-template-nu-kenzie" target="_blank">Repository</a></Text>
                </ProjectVercelLiStyle>
                <ProjectVercelLiStyle className="projectVercelLi"><a href="https://kenzie-burguer-v2-pedrocostaofc.vercel.app/" target="_blank"><img src="https://res.cloudinary.com/dtdq5o9pe/image/upload/v1690295419/burgues_yp6wqb.png" alt="" /></a>
                  <Text type="body3" color="grey2">
                    Link GitHub: <a href="https://github.com/Kenzie-Academy-Brasil-Developers/Kenzie-Academy-Brasil-Developers-kenzie-burguer-v2-template-pedrocostaOFC" target="_blank">Repository</a></Text>
                </ProjectVercelLiStyle>
              </ProjectVercelStyle>
            </ProjectsAreaContentVercel>
          </ProjectAreaWrapperColumns>
          <HeaderContentAbout>
            <Text as="h1" type="heading1" color="grey4">
              Sobre Mim.
              <br />
              <Text type="body1" color="grey2">
                "Eu tenho 26 anos e sou desenvolvedor Back-End/Full-Stack, moro em Santo André-Sp,
                sou bastante caseiro, adoro jogar jogos online e offline nas horas vagas e amo muito cozinhar,
                Tenho um hobby, um desafio pessoal que tento sempre ler a documentação de novas tecnologias que ainda
                não aprende, me formei em Desenvolvimento Web na Kenzie Academy Brasil, e hoje estou aberto a novos desafios
                e oportunidades que esse mundo vasto da programação me disponibiliza."
              </Text>
            </Text>
            <img src="https://res.cloudinary.com/dtdq5o9pe/image/upload/v1690295419/patu_gbqtsc.png" alt="" />
          </HeaderContentAbout>
        </Container>
      </ProjectsArea>
      <Contacts />
    </main>
  );
};
