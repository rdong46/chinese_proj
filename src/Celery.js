import {
  Box,
  Heading,
  Flex,
  Text,
  Center,
  VStack,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function Celery() {
  return (
    <Flex flexDirection={"column"}>
      <Center>
        <Box w="80%">
          <Flex
            justifyContent="space-evenly"
            alignItems="flex-start"
            flexDirection={{ base: "column", lg: "row" }}
          >
            {/* Video Section */}
            <Box>
              <Heading as="h2" size="lg" textAlign="center">
                Song
              </Heading>
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/T1USU0_EEoc?si=2YHI3h6GMreLm-NO"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </Box>

            {/* Lyrics Section */}
            <Box w={{ base: "100%", lg: "40%" }}>
              <VStack align="stretch" spacing="4">
                <Heading as="h2" size="lg" textAlign="center">
                  Lyrics
                </Heading>
                <Text whiteSpace="pre-line">
                  阳光从清晨窗外洒进来
                  <br />
                  我从down到谷低的梦中醒过来
                  <br />
                  冰箱只剩一颗芹菜没早餐 我不太习惯没有你在
                  <br />
                  当我开著冰箱看著芹菜发呆 心情还是有一点无奈
                  <br />
                  oh 算了吧 忘了吧 丢开吧 微笑吧 爱应该像芹菜
                  <br />
                  虽然苦苦的 涩涩的 甜甜的 酸酸的 滋美却不算坏
                  <br />
                  咬一口回忆 把你存心底 失去了感情 还有感激
                  <br />
                  oh 算了吧 忘了吧 丢开吧 微笑吧 爱应该像芹菜
                  <br />
                  就算苦苦的 涩涩的 甜甜的 酸酸的 爱要健康自然
                  <br />
                  勇气像海绵 吸干我的泪 我不怕孤单 因为曾经相爱
                  <br />
                  阳光从清晨窗外洒进来
                  <br />
                  我从down到谷低的梦中醒过来
                  <br />
                  冰箱只剩一颗芹菜没早餐 我不太习惯没有你在
                  <br />
                  爱能不能永远一半一半 所以我学著释怀
                  <br />
                  当我开著冰箱看著芹菜发呆 心情还是有一点无奈
                  <br />
                  oh 算了吧 忘了吧 丢开吧 微笑吧 爱应该像芹菜
                  <br />
                  虽然苦苦的 涩涩的 甜甜的 酸酸的 滋味却不算坏
                  <br />
                  咬一口回忆 把你存心底 失去了感情 还有感激
                  <br />
                  oh 算了吧 忘了吧 丢开吧 微笑吧 爱应该像芹菜
                  <br />
                  就算苦苦的 涩涩的 甜甜的 酸酸的 爱要健康自然
                  <br />
                  勇气像海绵 吸干我的泪 我不怕孤单 因为曾经相爱
                  <br />
                  oh 算了吧 忘了吧 丢开吧 微笑吧 爱应该像芹菜
                  <br />
                  虽然苦苦的 涩涩的 甜甜的 酸酸的 滋美却不算坏
                  <br />
                  咬一口回忆 把你存心底 失去了感情 还有感激
                  <br />
                  oh 算了吧 忘了吧 丢开吧 微笑吧 爱应该像芹菜
                  <br />
                  就算苦苦的 涩涩的 甜甜的 酸酸的 爱要健康自然
                  <br />
                  勇气像海绵 吸干我的泪 我不怕孤单 因为曾经相爱
                  <br />
                  因为曾经相爱 曾经相爱 曾经相爱
                  <br />
                  曾经相 曾经相 曾经相 曾经相爱
                </Text>
              </VStack>
            </Box>
          </Flex>

          {/* Text Sections */}
          <Flex
            justifyContent="space-evenly"
            alignItems="flex-start"
            flexDirection={{ base: "column", md: "row" }}
          >
            <Box w="50%" mr={{ base: 0, md: "4" }}>
              <Box bg="gray.100" p="4" borderRadius="lg">
                <Heading as="h3" size="md" textAlign="center">
                  Dish Introduction
                </Heading>
                <UnorderedList>
                  <ListItem>
                    芹菜，又名旱芹、药芹、富菜，是伞形科芹属的植物，原产于地中海沿岸沼泽地带，现世界各国普遍栽培。
                  </ListItem>
                  <ListItem>
                    中国芹菜栽培始于汉代，距今已有2000多年历史
                  </ListItem>
                  <ListItem>
                    芹菜的烹饪方法十分丰富，常见的有凉拌、炒菜、榨汁、炖汤、腌制等。
                  </ListItem>
                  <ListItem>
                    芹菜生命力顽强，易于种植，且产量高，因此在中国文化中常被视为勤劳的象征。
                  </ListItem>
                  <ListItem>
                    芹菜的“芹”与“勤”谐音。在中国文化中，人们认为勤劳的人会得到吉​​祥的回报，因此芹菜也被视为吉祥的象征。
                  </ListItem>
                  <ListItem>
                    芹菜性寒，具有清热解毒、利尿消肿等功效，因此在中国文化中也常被视为长寿的象征。
                  </ListItem>
                </UnorderedList>
              </Box>
            </Box>
            <Box w="50%">
              <Box bg="gray.100" p="4" borderRadius="lg">
                <Heading as="h3" size="md" textAlign="center">
                  Meaning
                </Heading>
                <UnorderedList>
                  <ListItem>
                    这首歌是一首失恋情歌，以芹菜作为意象，来比喻爱情的复杂性和情感的深度。
                  </ListItem>
                  <ListItem>
                    在歌里，芹菜被描述为一种各种各样味道的蔬菜，有时是甜的，有时是苦的。这就像爱情一样，有时会让人感到甜蜜，有时会让人感到痛苦，有时会让人感到兴奋。
                  </ListItem>
                  <ListItem>
                    歌曲将爱情比作芹菜，虽然苦涩，但也有甜蜜和酸楚，
                  </ListItem>
                </UnorderedList>
              </Box>
            </Box>
          </Flex>
        </Box>
      </Center>
      <Center marginTop="5em" padding="2em">
        <Link to={"/"}>Back Home</Link>
      </Center>
    </Flex>
  );
}
