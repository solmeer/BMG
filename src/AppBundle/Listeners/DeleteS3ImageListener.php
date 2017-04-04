<?php

namespace AppBundle\Listeners;

use Aws\S3\S3Client;
use Vich\UploaderBundle\Event\Event;

class DeleteS3ImageListener
{
    private $awsService;

    public function __construct(S3Client $awsService) {
        $this->awsService = $awsService;
    }

    public function onPreRemove(Event $event)
    {
        $entity = $event->getObject();

        $this->awsService->deleteObject(array(
            'Bucket' => 'bmgtattoo-bucket',
            'Key'    => str_replace("https://s3-us-west-2.amazonaws.com/bmgtattoo-bucket/","",$entity->getImage())));
    }

}