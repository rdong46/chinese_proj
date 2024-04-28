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

export default function Boba() {
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
                src="https://www.youtube.com/embed/2Qy3-hn8LuE?si=WRuZI9kI0M0KyPzr"
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
                  Hey牵你的手漫无目的散步
                  <br />
                  无论走到哪里心情一样满足 Baby
                  <br />
                  只要在 你的身边
                  <br />
                  都变成短暂美好的旅途
                  <br />
                  在我心中 传来熟悉的温度
                  <br />
                  那是我 想要紧握的幸福
                  <br />
                  像我第一次遇见你时 手中奶茶的香浓
                  <br />
                  还回味 心狂跳沉醉 想飞
                  <br />
                  你是我认定的甜度
                  <br />
                  平淡日子半糖也满足
                  <br />
                  你是我的珍珠 在我掌心捧住
                  <br />
                  为你心动片刻不由自主
                  <br />
                  把幸运封住
                  <br />
                  小小世界里彼此照顾
                  <br />
                  刚刚好的浓度 再加一点呵护
                  <br />
                  做你独一无二的 甜蜜 专属
                  <br />
                  Oh Hm
                  <br />
                  咖啡醇厚但苦涩浓郁
                  <br />
                  啤酒泡沫翻滚热情
                  <br />
                  若不小心会太刺激
                  <br />
                  可乐的糖太甜腻
                  <br />
                  我只爱珍珠奶茶像爱你
                  <br />
                  在我心中 传来熟悉的温度
                  <br />
                  那是我 想要紧握的幸福
                  <br />
                  像我第一次遇见你时
                  <br />
                  手中奶茶的香浓
                  <br />
                  还回味 心狂跳沉醉 想飞
                  <br />
                  你是我认定的甜度
                  <br />
                  平淡日子半糖也满足
                  <br />
                  你是我的珍珠 在我掌心捧住
                  <br />
                  为你心动片刻不由自主
                  <br />
                  把幸运封住
                  <br />
                  小小世界里彼此照顾
                  <br />
                  刚刚好的浓度 再加一点呵护
                  <br />
                  做你独一无二的 甜蜜 专属
                  <br />
                  Baby Hm
                  <br />
                  生活像诗 该怎么落笔
                  <br />
                  简单几句 写下全都是你
                  <br />
                  你是我认定的甜度
                  <br />
                  平淡日子半糖也满足
                  <br />
                  你是我的珍珠 在我掌心捧住
                  <br />
                  为你心动片刻不由自主
                  <br />
                  把幸运封住
                  <br />
                  小小世界里彼此照顾
                  <br />
                  刚刚好的浓度 再加一点呵护
                  <br />
                  做你独一无二的 甜蜜 专属
                  <br />
                  Hm Baby you and I
                  <br />
                  做你独一无二的 甜蜜 专属
                  <br />
                  Oh Baby you and I
                  <br />
                  做你独一无二的 甜蜜 专属
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
                    珍珠奶茶是一种起源于台湾的饮品，以红茶或奶茶为基底，加入煮熟的粉圆而成。
                  </ListItem>
                  <ListItem>关于珍珠奶茶的起源，有两种说法。</ListItem>
                  <ListItem>
                    珍珠奶茶诞生之初，只是台湾街头巷尾的普通小吃。然而，随着台湾文化的传播，珍珠奶茶逐渐在世界各地流行起来。
                  </ListItem>
                  <ListItem>
                    1990年代，珍珠奶茶开始在香港、新加坡等地出现。2000年代，珍珠奶茶更是席卷了北美、欧洲、亚洲等地，成为全球知名的饮品。
                  </ListItem>
                  <ListItem>
                    珍珠奶茶不仅是一种饮品，更是台湾饮食文化的重要代表。它见证了台湾经济的发展和社会文化的变化，也成为台湾对外交流的重要桥梁。
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
                    这首歌以珍珠奶茶为喻，表达爱情甜蜜的歌曲。歌词中将珍珠奶茶的香浓、甜蜜比作爱情的美好，而奶茶的各种配料和甜度则可以代表爱情中的各种细节和感受。
                  </ListItem>
                  <ListItem>
                    这首歌想表达的是爱情就像珍珠奶茶一样，可以带给我们甜蜜的幸福。只要我们用心经营，爱情就会像珍珠奶茶一样香浓。
                  </ListItem>
                  <ListItem>
                    珍珠奶茶作为一种流行饮品，深受人们喜爱，代表着一种简单而美好的生活方式。因此，歌曲也可以理解为是对简单幸福生活的赞美。
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
