<?php

namespace AppBundle\Api\Controller;

use Doctrine\Common\Annotations\AnnotationReader;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Serializer\Mapping\Factory\ClassMetadataFactory;
use Symfony\Component\Serializer\Mapping\Loader\AnnotationLoader;
use Symfony\Component\Serializer\Normalizer\PropertyNormalizer;
use Symfony\Component\Serializer\Serializer;

/**
 *
 * @Route("/api/tattoo")
 */
class TatooController extends Controller
{
    /**
     * @Route("/", name="tatoo_index")
     * @Method("GET")
     */
    public function indexAction()
    {
        $em = $this->getDoctrine()->getManager();

        $classMetadataFactory = new ClassMetadataFactory(new AnnotationLoader(new AnnotationReader()));
        $normalizer = new PropertyNormalizer($classMetadataFactory);
        $serializer = new Serializer([$normalizer]);

        $tatoos = $em->getRepository('AppBundle:Tattoo')->findAll();
        $tatoos = $serializer->normalize($tatoos, null, array('groups' => array('group1')));

        $response = new Response(json_encode($tatoos));
        $response->headers->set('Access-Control-Allow-Origin', '*');


        return $response;
    }

}
