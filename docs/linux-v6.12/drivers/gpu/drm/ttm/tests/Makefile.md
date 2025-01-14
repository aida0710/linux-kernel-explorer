---
sidebar_position: 2
---
# Makefile

### ファイル情報

- パス: `linux-v6.12/drivers/gpu/drm/ttm/tests/Makefile`

### コンテンツ

```txt
# SPDX-License-Identifier: GPL-2.0 AND MIT

obj-$(CONFIG_DRM_TTM_KUNIT_TEST) += \
        ttm_device_test.o \
        ttm_pool_test.o \
        ttm_resource_test.o \
        ttm_tt_test.o \
        ttm_bo_test.o \
        ttm_bo_validate_test.o \
        ttm_mock_manager.o \
        ttm_kunit_helpers.o

```
