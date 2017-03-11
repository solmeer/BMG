<?php

namespace AppBundle\Api\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Serializer\Serializer;

/**
 *
 * @Route("/api/category")
 */
class CategoryController extends Controller
{
    /**
     * @Route("/", name="category_index")
     * @Method("GET")
     */
    public function indexAction()
    {
        $em = $this->getDoctrine()->getManager();

        $categories = $em->getRepository('AppBundle:Category')->findAll();


        $categories = $this->get('serializer')->normalize($categories, null, array('groups' => array('group1')));
        $categories = json_encode($categories);

        $response = new Response($categories);
        $response->headers->set('Access-Control-Allow-Origin', '*');


        return $response;
    }

}
