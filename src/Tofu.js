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

export default function Tofu() {
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
                src="https://www.youtube.com/embed/GVSEMwXc8KA?si=K9A9PM5BLlJWGGqr"
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
                  那撲鼻的香味 唾液作祟
                  <br />
                  熱辣辣的曖昧 讓人沈醉
                  <br />
                  這種麻辣似你的嫵媚
                  <br />
                  Girl you're so hot 辣的美
                  <br />
                  滑過舌尖 豆腐在踩線
                  <br />
                  就像熱戀瘋狂的世界無上限 baby
                  <br />
                  麻木唇嘴失去所有的感覺
                  <br />
                  Hey 打開味覺的盡頭
                  <br />
                  會上癮無處可躲
                  <br />
                  Let the feeling go
                  <br />
                  大腦都失控
                  <br />
                  味覺震蕩麻痹50赫茲的律動
                  <br />
                  Show me show me ya
                  <br />
                  你給的陷阱 ya
                  <br />
                  一口讓我上癮 yeah
                  <br />
                  沒有人能抵擋這滋味 try
                  <br />
                  陷入這麻辣痛快
                  <br />
                  Make it 麻婆豆腐 (hey oh)
                  <br />
                  Girl 麻婆豆腐 (oh)
                  <br />
                  Make it 麻婆豆腐 (I love it oh)
                  <br />
                  Girl 麻婆豆腐
                  <br />
                  是我的麻婆豆腐 (oh)
                  <br />
                  嘴唇包覆的滋味 girl
                  <br />
                  太黯然銷魂麻醉
                  <br />
                  這感覺 無法言喻太危險
                  <br />
                  陷入愛情麻痹瞬間 spicy
                  <br />
                  Hot and spicy ya
                  <br />
                  Let the feeling go
                  <br />
                  大腦都失控
                  <br />
                  味覺震蕩麻痹50赫茲的律動
                  <br />
                  Show me show me ya
                  <br />
                  你給的陷阱 ya
                  <br />
                  一口讓我上癮 yeah
                  <br />
                  沒有人能抵擋這滋味 try
                  <br />
                  陷入這麻辣痛快
                  <br />
                  Make it 麻婆豆腐 (hey oh)
                  <br />
                  Girl 麻婆豆腐 (oh)
                  <br />
                  Make it 麻婆豆腐 (I love it oh)
                  <br />
                  Girl 麻婆豆腐
                  <br />
                  是我的麻婆豆腐 (oh)
                  <br />
                  難以抗拒這種辣的狀態
                  <br />
                  陷入愛說太快
                  <br />
                  Baby I don't know why
                  <br />
                  會上癮的存在
                  <br />
                  (I Like you)
                  <br />
                  就是停不下來 轉舌尖在發燙
                  <br />
                  這種狂熱的滋味
                  <br />
                  Girl you make me crazy
                  <br />
                  Make it 麻婆豆腐
                  <br />
                  (Hey oh)
                  <br />
                  Girl 麻婆豆腐
                  <br />
                  (Hey oh)
                  <br />
                  Make it 麻婆豆腐
                  <br />
                  (I love it oh)
                  <br />
                  Girl 麻婆豆腐
                  <br />
                  是我的麻婆豆腐
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
                    麻婆豆腐是一道来自四川省的传统美食，以其麻辣的口感和丰富的味道而闻名。它属于川菜，也是其中最具代表性的菜肴之一。
                  </ListItem>
                  <ListItem>
                    麻婆豆腐的历史可以追溯到清朝，据说起源于成都的陈麻婆豆腐店。陈麻婆是一位厨师的妻子，她擅长烹饪，发明了这道菜。麻婆豆腐最初是一道家常菜，后来逐渐传遍了四川，并成为享誉全国的美食。
                  </ListItem>
                  <ListItem>
                    麻婆豆腐的主要食材包括豆腐、肉末、豆瓣酱、辣椒、花椒、姜、蒜等。制作这道菜的关键在于对食材的选择和烹饪技巧的掌握。
                  </ListItem>
                  <ListItem>
                    麻婆豆腐的特色在于麻、辣、烫、香、酥、嫩、鲜、活八字，也称之为八字箴言。
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
                    这首歌是一首利用“麻婆豆腐”来描绘热恋中男女之间浓烈情感。
                  </ListItem>
                  <ListItem>
                    歌曲通过麻辣的口感来展现了爱情的炽热与疯狂，以及爱情所带来的不可抗拒的吸引力。
                  </ListItem>
                  <ListItem>
                    开头的歌词便以麻辣诱人的香气和热辣的口感，营造出一种暧昧而迷人的氛围。
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
