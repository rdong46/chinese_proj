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

export default function Onion() {
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
                src="https://www.youtube.com/embed/78NED_I0lU0?si=WaOYCWXI5dSAe8qm"
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
                  如果你眼神能够为我　片刻地降临
                  <br />
                  如果你能听到　心碎的声音
                  <br />
                  沉默地守护着你　沉默的等奇迹
                  <br />
                  大家都吃着聊着笑着　 今晚多开心
                  <br />
                  最角落里的我　 笑得多合群
                  <br />
                  盘底的洋葱像我　 永远是调味品
                  <br />
                  偷偷地看着你　 偷偷地隐藏着自己
                  <br />
                  如果你愿意一层一层一层地剥开我的心
                  <br />
                  你会发现　你会讶异
                  <br />
                  你是我最压抑　最深处的秘密
                  <br />
                  如果你愿意一层一层一层地剥开我的心
                  <br />
                  你会鼻酸　你会流泪
                  <br />
                  只要你能听到我　看到我的全心全意
                  <br />
                  听你说你和你的他们　暧昧的空气
                  <br />
                  我和我的绝望　 装得很风趣
                  <br />
                  我就像一颗洋葱　 永远是配角戏
                  <br />
                  多希望能与你　 有一秒专属的剧情
                  <br />
                  如果你愿意一层一层一层地剥开我的心
                  <br />
                  你会发现　 你会讶异
                  <br />
                  你是我最压抑　 最深处的秘密
                  <br />
                  如果你愿意一层一层一层地剥开我的心
                  <br />
                  你会鼻酸　 你会流泪
                  <br />
                  只要你能听到我　 看到我的全心全意
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
                    洋葱，又称胡葱、大葱，原产于亚洲，现已在世界各地广泛栽培。
                  </ListItem>
                  <ListItem>
                    洋葱在中国有着悠久的种植历史，早在汉代就有文献记载。
                  </ListItem>
                  <ListItem>
                    中华饮食文化中，洋葱扮演着重要的角色，不仅是人们餐桌上常见的食材，也是许多经典菜肴的必备调料。
                  </ListItem>
                  <ListItem>
                    洋葱营养丰富，含有丰富的维生素、矿物质和膳食纤维。
                  </ListItem>
                  <ListItem>
                    洋葱可以生食、熟食。生食洋葱可以保留其营养成分，但容易刺激肠胃，因此不宜过多食用。
                  </ListItem>
                  <ListItem>
                    熟食洋葱可以去除其辛辣味，更易于消化。洋葱的常见烹饪方法包括炒、烤、炖等。
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
                    这首歌的创作灵感来源于五月天主唱阿信对杨宗纬性格的理解。阿信认为，杨宗纬就像洋葱一样，外表看似普通，内心却蕴藏着丰富的情感世界。因此，他以洋葱为题，创作了这首歌曲。
                  </ListItem>
                  <ListItem>
                    洋葱由一层一层的薄皮包裹而成，剥开一层又一层，才能看到其核心。这与歌曲所表达的爱情主题跟杨淙一样。爱情需要经过层层考验，才能到达真挚的阶段。
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
