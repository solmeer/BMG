<?php

namespace DataFixtures\ORM;

use AppBundle\Entity\Article;
use Doctrine\Common\DataFixtures\AbstractFixture;
use Doctrine\Common\DataFixtures\OrderedFixtureInterface;
use Doctrine\Common\Persistence\ObjectManager;

class LoadArticleData extends AbstractFixture implements OrderedFixtureInterface
{

    /**
     * Load data fixtures with the passed EntityManager
     *
     * @param ObjectManager $manager
     */
    public function load(ObjectManager $manager)
    {
        $author = $manager->getRepository('AppBundle:Person');
        $author = $author->findOneBy(array('name' => 'Bohdan_Lutsenko'));

        $category = $manager->getRepository('AppBundle:Category');
        $category = $category->findOneBy(array('name' => 'News'));

        $article = new Article();
        $article->setTitle('SomeTitle');
        $content = file_get_contents('http://loripsum.net/api/3/plaintext');
        $article->setText($content);
        $article->setAuthor($author);
        $article->setCategory($category);

        $manager->persist($article);

        $manager->flush();

    }

    /**
     * Get the order of this fixture
     *
     * @return integer
     */
    public function getOrder()
    {
        return 3;
    }
}

