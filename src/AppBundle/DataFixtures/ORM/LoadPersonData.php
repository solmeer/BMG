<?php

namespace DataFixtures\ORM;

use AppBundle\Entity\Category;
use AppBundle\Entity\Person;
use Doctrine\Common\DataFixtures\AbstractFixture;
use Doctrine\Common\DataFixtures\OrderedFixtureInterface;
use Doctrine\Common\Persistence\ObjectManager;

class LoadPersonData extends AbstractFixture implements OrderedFixtureInterface
{

    /**
     * Load data fixtures with the passed EntityManager
     *
     * @param ObjectManager $manager
     */
    public function load(ObjectManager $manager)
    {
        $person = new Person();
        $person->setName('Bohdan_Lutsenko');
        $person->setInfo('Bla-bla-bla');
        $person->setPhoto('http://work-place.net/wp-content/uploads/2016/01/%D0%BF%D1%80%D0%BE%D1%84%D0%B5%D1%81%D1%81%D0%B8%D1%8F-%D1%82%D0%B0%D1%82%D1%83%D0%B8%D1%80%D0%BE%D0%B2%D1%89%D0%B8%D0%BA.jpg');

        $manager->persist($person);
        $manager->flush();

    }

    /**
     * Get the order of this fixture
     *
     * @return integer
     */
    public function getOrder()
    {
        return 2;
    }
}

