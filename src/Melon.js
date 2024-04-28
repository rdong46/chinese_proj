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

export default function Melon() {
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
                src="https://www.youtube.com/embed/UdWlBBqiC7I?si=PolFrWHCOkB7DHBC"
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
                  共你干杯再举箸 突然间相看莞尔 盘中透着那味儿
                  <br />
                  大概今生有些事 是提早都不可以 明白其妙处
                  <br />
                  就像你当日痛心她回绝一番美意
                  <br />
                  怎发现你从情劫亦能学懂开解与宽恕
                  <br />
                  也像我很纠结的公事 此际回头看 原来并没有事
                  <br />
                  真想不到当初我们也讨厌吃苦瓜
                  <br />
                  今天竟吃得出那睿智愈来愈记挂
                  <br />
                  开始时捱一些苦 栽种绝处的花
                  <br />
                  幸得艰辛的引路甜蜜不致太寡
                  <br />
                  青春的快餐只要求快不理哪一家
                  <br />
                  哪有玩味的空档来欣赏细致淡雅
                  <br />
                  到大悟大彻将虎咽的升华 等消化学沏茶
                  <br />
                  至共你觉得苦也不太差
                  <br />
                  下半生竟再开学 入迷的终于醒觉 移走最后的死角
                  <br />
                  用痛苦烘托欢乐 让余甘彰显险恶 如艺坛杰作
                  <br />
                  就像我一直听香夭从未沾湿眼角
                  <br />
                  仔细地看神坛里木纹什么精巧也不觉
                  <br />
                  却在某萧瑟晚秋深夜 忽尔明了了 而黄叶便碎落
                  <br />
                  真想不到当初我们也讨厌吃苦瓜
                  <br />
                  今天竟吃得出那睿智愈来愈记挂
                  <br />
                  开始时捱一些苦 栽种绝处的花
                  <br />
                  幸得艰辛的引路甜蜜不致太寡
                  <br />
                  青春的快餐只要求快不理哪一家
                  <br />
                  哪有玩味的空档来欣赏细致淡雅
                  <br />
                  到大悟大彻将虎咽的升华 等消化学沏茶
                  <br />
                  至共你觉得苦也不太差
                  <br />
                  真想不到当初我们也讨厌吃苦瓜
                  <br />
                  当睇清世间所有定理又何用再怕
                  <br />
                  珍惜淡定的心境 苦过后更加清
                  <br />
                  万般过去亦无味但有领会留下
                  <br />
                  今天先记得听过人说这叫半生瓜
                  <br />
                  那意味着它的美年轻不会洞察吗
                  <br />
                  到大悟大彻将一切都升华 这一秒坐拥晚霞
                  <br />
                  我共你觉得苦也不太差
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
                    苦瓜又叫凉瓜、半生瓜是葫芦科的热带和亚热带藤本植物。
                  </ListItem>
                  <ListItem>
                    苦瓜原产印度尼西亚，宋元时期传入中国，如今分布于中国各地。
                  </ListItem>
                  <ListItem>
                    苦瓜的营养价值非常的高，含有丰富的维生素C、维生素B1、维生素B2、钾、钙、磷等营养元素。
                  </ListItem>
                  <ListItem>
                    苦瓜中的苦味物质具有抗癌、抗衰老、降血压等作用。
                  </ListItem>
                  <ListItem>苦瓜可以生吃、炒食、煮汤、煲粥等。</ListItem>
                  <ListItem>
                    一些常见的苦瓜食谱有凉拌苦瓜，炒苦瓜，苦瓜汤， 苦瓜粥。
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
                    苦瓜是一种需要经过时间才能成熟的水果，因此也象征着成长。在这首歌里，苦瓜可以理解为是经历了成长的蜕变。
                  </ListItem>
                  <ListItem>
                    这首歌想表达的是是从小时候不爱苦瓜，到后来喜欢上苦瓜的苦。这首歌利用这种感觉来比喻人慢慢长大，慢慢接受一些事物，包括接受了人生的艰辛困苦。
                  </ListItem>
                  <ListItem>
                    虽然苦瓜苦，但是对身体非常好。这首通过苦瓜想表明人要经历过苦才能成长。
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
