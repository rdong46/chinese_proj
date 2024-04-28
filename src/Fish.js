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

export default function Fish() {
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
                src="https://www.youtube.com/embed/VDwaaTGXpm8?si=3-NmfRn9FENdE5X_"
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
                  骑着二八单车
                  <br />
                  在胡同里自由穿梭
                  <br />
                  我们转过街角
                  <br />
                  想起了第一次约会
                  <br />
                  就在这家小店
                  <br />
                  你被辣得满头大汗
                  <br />
                  还要装着小菜一碗
                  <br />
                  为我忙得团团转
                  <br />
                  我爱你就像爱吃水煮鱼
                  <br />
                  我要永远把你放在我的油锅里
                  <br />
                  我爱你就像爱吃水煮鱼
                  <br />
                  爱你的帅你的乖
                  <br />
                  哦年年有鱼
                  <br />
                  我爱你
                  <br />
                  我们去吃水煮鱼
                  <br />
                  热辣辣的感觉
                  <br />
                  让我每天想你
                  <br />
                  我爱你就像爱吃水煮鱼
                  <br />
                  爱你的好你的坏
                  <br />
                  我不能没有你
                  <br />
                  这一切其实不简单
                  <br />
                  爱不能抽签
                  <br />
                  更不能有谎言
                  <br />
                  这一切其实很自然
                  <br />
                  爱情像水煮鱼般
                  <br />
                  要麻辣得很真切
                  <br />
                  这一切其实不简单
                  <br />
                  爱不能抽签
                  <br />
                  更不能有谎言
                  <br />
                  这一切其实很自然
                  <br />
                  如果你确定了
                  <br />
                  永远别改变
                  <br />
                  你的世界有我
                  <br />
                  我的世界有你
                  <br />
                  多可爱的生活
                  <br />
                  永远不会忘记
                  <br />
                  水煮鱼的故事
                  <br />
                  美好还在继续
                  <br />
                  水煮鱼的故事
                  <br />
                  永远不会忘记
                  <br />
                  水煮鱼的故事啊
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
                    水煮鱼是一道著名的川菜，以其麻辣鲜香的口味而闻名。它通常由新鲜的鱼片、豆芽、辣椒等食材做的，具有“油而不腻、辣而不燥、麻而不苦、肉质滑嫩”的特点。
                  </ListItem>
                  <ListItem>
                    水煮鱼的起源是在清朝末期，在四川省重庆市的渝北区翠云乡发明的。
                  </ListItem>
                  <ListItem>
                    水煮鱼的鱼片要选择新鲜的，并切成薄片。在腌制时，可以加入淀粉、料酒、鸡蛋等，以使鱼片更加嫩滑。
                  </ListItem>
                  <ListItem>
                    豆瓣酱是水煮鱼的主要调味料之一，需要炒香炒出红油才能更好地激发出香味。
                  </ListItem>
                  <ListItem>
                    水煮鱼的烹饪过程比较快速。首先要将油烧热，然后加入豆瓣酱、辣椒等炒香，再加入鱼片、豆芽等食材煮熟后就可以了。
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
                    这首歌描写的是一对热恋中的情人，歌名的寓意就是他们的爱情如水煮鱼般热辣
                  </ListItem>
                  <ListItem>
                    歌曲以“水煮鱼”为题，通过对水煮鱼制作过程、展现了水煮鱼的魅力。
                  </ListItem>
                  <ListItem>
                    这首歌也展现了对生活热情和追求幸福的积极态度。水煮鱼是一道充满活力的菜，麻辣的口感让人非常的有精神，而鱼肉的鲜香会让人回味无穷。歌曲通过水煮鱼来表达生活热情和追求幸福的积极态度。
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
