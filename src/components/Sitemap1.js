import React from "react";

import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Container from "react-bootstrap/Container";

import PageBanner from "./PageBanner";
import geneTube from "../utils/gene-tube1.jpeg";

export default function Sitemap1() {
  return (
    <React.Fragment>
      <PageBanner banner={geneTube} text={`Sitemap Project`} />
      <Container className="p-5">
        <h2>Illustrating Python via Bioinformatics Examples</h2>
        <Tabs className="pt-3 tab-text">
          <Tab
            className="tab-text px-5 py-3"
            eventKey="Basic Bioinformatics"
            title="Basic Bioinformatics"
          >
            <h3>Basic Bioinformatics Examples in Python </h3>
            <p>
              Authors: Hans Petter Langtangen, Geir Kjetil Sandve Date: Mar 22,
              2015
              <br />
              source:
              http://hplgit.github.io/bioinf-py/doc/pub/html/main_bioinf.html#
            </p>
            <p>
              The instructions to the computer how the analysis is going to be
              performed are specified using the Python programming language. The
              forthcoming examples are simple illustrations of the type of
              problem settings and corresponding Python implementations that are
              encountered in bioinformatics.
            </p>
            <p>
              However, the leading Python software for bioinformatics
              applications is BioPython and for real-world problem solving one
              should rather utilize BioPython instead of home-made solutions.
              The aim of the sections below is to illustrate the nature of
              bioinformatics analysis and introduce what is inside packages like
              BioPython.
            </p>
            <p>
              We shall start with some very simple examples on DNA analysis that
              bring together basic building blocks in programming: loops, if
              tests, and functions. As reader you should be somewhat familiar
              with these building blocks in general and also know about the
              specific Python syntax.
            </p>
            <code className="p-3">
              {`def count_v2(dna, base):
    i = 0 # counter
    for c in dna:
        if c == base:
            i += 1
    return i

dna = 'ATGCGGACCTAT'
base = 'C'
n = count_v2(dna, base)

# printf-style formatting
print '%s appears %d times in %s' % (base, n, dna)

# or (new) format string syntax
print '{base} appears {n} times in {dna}'.format(
    base=base, n=n, dna=dna)`}
            </code>
          </Tab>
          <Tab
            className="tab-text px-5 py-3"
            eventKey="DNA Analysis"
            title="DNA Analysis"
          >
            <h3>Classes for DNA Analysis</h3>
            <p>
              O me! what eyes hath Love put in my head, Which have no
              correspondence with true sight; Or, if they have, where is my
              judgment fled, That censures falsely what they see aright? If that
              be fair whereon my false eyes dote,
            </p>
            <p>
              What means the world to say it is not so? If it be not, then love
              doth well denote Love's eye is not so true as all men's: no, How
              can it? O! how can Love's eye be true, That is so vexed with
              watching and with tears?
            </p>
            <code className="p-3">
              {`class Region(object):
    def __init__(self, dna, start, end):
        self._region = dna[start:end]

    def get_region(self):
        return self._region

    def __len__(self):
        return len(self._region)

    def __eq__(self, other):
        """Check if two Region instances are equal."""
        return self._region == other._region

    def __add__(self, other):
        """Add Region instances: self + other"""
        return self._region + other._region

    def __iadd__(self, other):
        """Increment Region instance: self += other"""
        self._region += other._region
        return self`}
            </code>
          </Tab>
          <Tab
            className="tab-text px-5 py-3"
            eventKey="contact"
            title="Contact"
          >
            <h3>Title for contact tab</h3>
            <p>
              O me! what eyes hath Love put in my head, Which have no
              correspondence with true sight; Or, if they have, where is my
              judgment fled,
            </p>
            <p>
              That censures falsely what they see aright? If that be fair
              whereon my false eyes dote, What means the world to say it is not
              so? If it be not, then love doth well denote Love's eye is not so
              true as all men's: no, How can it? O! how can Love's eye be true,
              That is so vexed with watching and with tears?
            </p>
            <p>
              Type is a foundational element of any branded visual execution—and
              our type choices signal our commitment to precision and
              excellence. Roche has a legacy in typography with an emphasis on
              legibility as a foundation of our design excellence. Our text are
              set in Imago and Minion. The combination of Imago, a sans-serif
              face with technical appeal, and Minion, an elegant serifed face,
              allows us to dynamically and characteristically design our
              communication media.
            </p>
          </Tab>
        </Tabs>
      </Container>
    </React.Fragment>
  );
}
