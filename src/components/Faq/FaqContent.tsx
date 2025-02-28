"use client";

import React from "react"; 
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemPanel,
  AccordionItemButton,
} from "react-accessible-accordion";

const FaqContent: React.FC = () => {
  return (
    <>
      <div className="faq-area ptb-100">
        <div className="container">
          <div className="faq-accordion">
            <Accordion preExpanded={["a"]}>
              <AccordionItem uuid="a">
                <AccordionItemHeading>
                  <AccordionItemButton>
                    <span>Why are consultants important?</span>
                  </AccordionItemButton>
                </AccordionItemHeading>

                <AccordionItemPanel>
                  <p>
                    <strong>Texap</strong> is always looking for talented{" "}
                    <a href="/faq">information</a> security and IT risk
                    management professionals who are dedicated, hard working and
                    looking for a challenge. If you are interested in employment
                    with <strong>Texap</strong>, a company who values you and
                    your family, visit our careers page.
                  </p>
                  <ul>
                    <li>a console</li>
                    <li>Two Joy-Con controllers that are detachable</li>
                    <li>
                      A grip that enables you to combine them into a single
                      gamepad for play on the TV
                    </li>
                    <li>
                      Two straps for turning the Joy-Cons into individual
                      controllers
                    </li>
                    <li>
                      A dock which you can use to connect your console to the
                      television for traditional gameplay
                    </li>
                  </ul>
                </AccordionItemPanel>
              </AccordionItem>

              <AccordionItem uuid="b">
                <AccordionItemHeading>
                  <AccordionItemButton>
                    <span>What is the purpose of a consultant?</span>
                  </AccordionItemButton>
                </AccordionItemHeading>

                <AccordionItemPanel>
                  <p>
                    Anim pariatur cliche reprehenderit, enim eiusmod high life
                    accusamus terry richardson ad squid. 3 wolf moon officia
                    aute, non cupidatat skateboard dolor brunch. Food truck
                    quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,
                    sunt aliqua put a bird on it squid single-origin coffee
                    nulla assumenda shoreditch et. Nihil anim keffiyeh
                    helvetica, craft beer labore wes anderson cred nesciunt
                    sapiente ea proident. Ad vegan excepteur butcher vice lomo.
                  </p>
                  <ul>
                    <li>a console</li>
                    <li>
                      Two Joy-Con controllers that are{" "}
                      <a href="/faq">detachable</a>
                    </li>
                    <li>
                      A grip that enables you to combine them into a single
                      gamepad for play on the TV
                    </li>
                    <li>
                      Two straps for turning the Joy-Cons into{" "}
                      <strong>individual</strong> controllers
                    </li>
                    <li>
                      A dock which you can use to connect your console to the
                      television for traditional gameplay
                    </li>
                  </ul>
                </AccordionItemPanel>
              </AccordionItem>

              <AccordionItem uuid="c">
                <AccordionItemHeading>
                  <AccordionItemButton>
                    <span>What attracts you to the role of a consultant?</span>
                  </AccordionItemButton>
                </AccordionItemHeading>

                <AccordionItemPanel>
                  <p>
                    Anim pariatur cliche reprehenderit, enim eiusmod high life
                    accusamus terry richardson ad squid. 3 wolf moon officia
                    aute, non cupidatat skateboard dolor brunch. Food truck
                    quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor.
                  </p>
                  <p>
                    Tunt aliqua put a bird on it squid single-origin coffee
                    nulla assumenda shoreditch et. Nihil anim keffiyeh
                    helvetica, craft beer labore wes anderson cred nesciunt
                    sapiente ea proident. Ad vegan excepteur butcher vice lomo.
                  </p>
                </AccordionItemPanel>
              </AccordionItem>

              <AccordionItem uuid="d">
                <AccordionItemHeading>
                  <AccordionItemButton>
                    <span>What are the advantages of being a consultant?</span>
                  </AccordionItemButton>
                </AccordionItemHeading>

                <AccordionItemPanel>
                  <ul>
                    <li>a console</li>
                    <li>Two Joy-Con controllers that are detachable</li>
                    <li>
                      A grip that enables you to combine them into a single
                      gamepad for play on the TV
                    </li>
                    <li>
                      Two straps for turning the Joy-Cons into individual
                      controllers
                    </li>
                    <li>
                      A dock which you can use to connect your console to the
                      television for traditional gameplay
                    </li>
                  </ul>
                </AccordionItemPanel>
              </AccordionItem>

              <AccordionItem uuid="e">
                <AccordionItemHeading>
                  <AccordionItemButton>
                    <span>Is consulting a good career?</span>
                  </AccordionItemButton>
                </AccordionItemHeading>

                <AccordionItemPanel>
                  <p>
                    Anim pariatur cliche reprehenderit, enim eiusmod high life
                    accusamus terry richardson ad squid. 3 wolf moon officia
                    aute, non cupidatat skateboard dolor brunch. Food truck
                    quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,
                    sunt aliqua put a bird on it squid single-origin coffee
                    nulla assumenda shoreditch et. Nihil anim keffiyeh
                    helvetica, craft beer labore wes anderson cred nesciunt
                    sapiente ea proident. Ad vegan excepteur butcher vice lomo.
                  </p>
                </AccordionItemPanel>
              </AccordionItem>

              <AccordionItem uuid="f">
                <AccordionItemHeading>
                  <AccordionItemButton>
                    <span>How is working in consulting?</span>
                  </AccordionItemButton>
                </AccordionItemHeading>

                <AccordionItemPanel>
                  <p>
                    Anim pariatur cliche reprehenderit, enim eiusmod high life
                    accusamus terry richardson ad squid. 3 wolf moon officia
                    aute, non cupidatat skateboard dolor brunch. Food truck
                    quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,
                    sunt aliqua put a bird on it squid single-origin coffee
                    nulla assumenda shoreditch et. Nihil anim keffiyeh
                    helvetica, craft beer labore wes anderson cred nesciunt
                    sapiente ea proident. Ad vegan excepteur butcher vice lomo.
                  </p>
                  <ul>
                    <li>a console</li>
                    <li>
                      Two Joy-Con controllers that are{" "}
                      <a href="/faq">detachable</a>
                    </li>
                    <li>
                      A grip that enables you to combine them into a single
                      gamepad for play on the TV
                    </li>
                    <li>
                      Two straps for turning the Joy-Cons into{" "}
                      <strong>individual</strong> controllers
                    </li>
                    <li>
                      A dock which you can use to connect your console to the
                      television for traditional gameplay
                    </li>
                  </ul>
                </AccordionItemPanel>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </>
  );
};

export default FaqContent;
