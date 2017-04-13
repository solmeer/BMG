<?php

namespace AppBundle\Api\Controller;

use AppBundle\Entity\Article;
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
 * @Route("/api/articles")
 */
class ArticleController extends Controller
{
    /**
     * @Route("/", name="articles_index")
     * @Method("GET")
     */
    public function indexAction()
    {
        $em = $this->getDoctrine()->getManager();

        $articles = $em->getRepository('AppBundle:Article')->findAll();

        $classMetadataFactory = new ClassMetadataFactory(new AnnotationLoader(new AnnotationReader()));
        $normalizer = new PropertyNormalizer($classMetadataFactory);
        $serializer = new Serializer([$normalizer]);

        $articles = $serializer->normalize($articles, null, array('groups' => array('group1')));

        $response = new Response(json_encode($articles));
        $response->headers->set('Access-Control-Allow-Origin', '*');


        return $response;
    }

    /**
     * @Route("/{id}", name="articles_show", requirements={"id": "\d+"})
     * @Method("GET")
     */
    public function showAction(Article $article)
    {
        $classMetadataFactory = new ClassMetadataFactory(new AnnotationLoader(new AnnotationReader()));
        $normalizer = new PropertyNormalizer($classMetadataFactory);
        $serializer = new Serializer([$normalizer]);

        $article = $serializer->normalize($article, null, array('groups' => array('group1')));

        $response = new Response(json_encode($article));
        $response->headers->set('Access-Control-Allow-Origin', '*');


        return $response;
    }
}
