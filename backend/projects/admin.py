from django.contrib import admin
from projects.models import Project, ProjectImage, ProjectSocial, ProjectMember


class ProjectAdmin(admin.ModelAdmin):
    exclude = (
        # 'slug',
        )


admin.site.register(Project, ProjectAdmin)
admin.site.register(ProjectImage)
admin.site.register(ProjectSocial)
admin.site.register(ProjectMember)

