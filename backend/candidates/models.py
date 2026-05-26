from django.db import models

class Candidate(models.Model):

    candidate_name = models.CharField(max_length=100)

    phone_number = models.CharField(max_length=15)

    email_id = models.EmailField()

    qualification = models.CharField(max_length=100)

    experience = models.CharField(max_length=50)

    role_applied_for = models.CharField(max_length=100)

    application_source = models.CharField(max_length=100)

    current_status = models.CharField(max_length=100)

    interview_round = models.CharField(max_length=100)

    communication_skills = models.CharField(max_length=50)

    technical_skills = models.CharField(max_length=50)

    sales_orientation = models.CharField(max_length=50)

    recruiter_name = models.CharField(max_length=100)

    remarks = models.CharField(max_length=255)

    next_action = models.CharField(max_length=255)

    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.candidate_name