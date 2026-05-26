from rest_framework.decorators import api_view
from rest_framework.response import Response

from .models import Candidate
from .serializers import CandidateSerializer


@api_view(['POST'])
def add_candidate(request):

    serializer = CandidateSerializer(data=request.data)

    if serializer.is_valid():

        serializer.save()

        return Response({
            "message": "Candidate Added"
        })

    return Response(serializer.errors)


@api_view(['GET'])
def get_candidates(request):

    candidates = Candidate.objects.all().order_by('-id')

    serializer = CandidateSerializer(candidates, many=True)

    return Response(serializer.data)


@api_view(['DELETE'])
def delete_candidate(request, id):

    candidate = Candidate.objects.get(id=id)

    candidate.delete()

    return Response({
        "message": "Deleted"
    })

@api_view(['PUT'])
def update_status(request, id):

    candidate = Candidate.objects.get(id=id)

    candidate.current_status = request.data['current_status']

    candidate.save()

    return Response({
        "message": "Status Updated"
    })