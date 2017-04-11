<?php

namespace AppBundle\Api\Controller;

use Doctrine\Common\Annotations\AnnotationReader;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Template;
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


    /**
     * @Route("/test_thumb", name="thumb")
     * @Template("default/thumb.html.twig")
     */
    public function testThumbAction()
    {
//        $filesystem = $this->get('knp_gaufrette.filesystem_map')->get('tattoo_images');
//        $file = $filesystem->get('RaKjgsgbW3k.jpg');

        /*
         * Note the use of the dump() function.
         * If you don't have the VarDumperComponent installed, use var_dump().
         * @see http://symfony.com/doc/current/components/var_dumper/introduction.html
         */
//        dump($file);die;

        /*$image = 'https://s3-'.
            $this->getParameter('aws_region').
            '.amazonaws.com/'.
            $this->getParameter('aws_bucket').
            '/tattoo_photos/RaKjgsgbW3k.jpg';*/

        $image = '4mK0XV1qCTg.jpg';

        return [
            'image' => $image
        ];
    }
}
