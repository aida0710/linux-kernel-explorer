---
sidebar_position: 10
---
# image-tags.yml

### ファイル情報

- パス: `linux-v6.12/drivers/gpu/drm/ci/image-tags.yml`

### コンテンツ

```yml
variables:
   CONTAINER_TAG: "2024-08-07-mesa-uprev"
   DEBIAN_X86_64_BUILD_BASE_IMAGE: "debian/x86_64_build-base"
   DEBIAN_BASE_TAG: "${CONTAINER_TAG}"

   DEBIAN_X86_64_BUILD_IMAGE_PATH: "debian/x86_64_build"
   DEBIAN_BUILD_TAG: "${CONTAINER_TAG}"

   KERNEL_ROOTFS_TAG: "${CONTAINER_TAG}"

   DEBIAN_X86_64_TEST_BASE_IMAGE: "debian/x86_64_test-base"
   DEBIAN_X86_64_TEST_IMAGE_GL_PATH: "debian/x86_64_test-gl"
   DEBIAN_TEST_GL_TAG: "${CONTAINER_TAG}"

   ALPINE_X86_64_LAVA_SSH_TAG: "${CONTAINER_TAG}"
```
