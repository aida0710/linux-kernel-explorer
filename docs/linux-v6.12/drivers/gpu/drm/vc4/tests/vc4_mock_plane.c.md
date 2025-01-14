---
sidebar_position: 6
---
# vc4_mock_plane.c

### ファイル情報

- パス: `linux-v6.12/drivers/gpu/drm/vc4/tests/vc4_mock_plane.c`

### コンテンツ

```c
// SPDX-License-Identifier: GPL-2.0

#include <drm/drm_kunit_helpers.h>
#include <drm/drm_plane.h>

#include <kunit/test.h>

#include "vc4_mock.h"

struct drm_plane *vc4_dummy_plane(struct kunit *test, struct drm_device *drm,
				  enum drm_plane_type type)
{
	struct drm_plane *plane;

	KUNIT_ASSERT_EQ(test, type, DRM_PLANE_TYPE_PRIMARY);

	plane = drm_kunit_helper_create_primary_plane(test, drm,
						      NULL,
						      NULL,
						      NULL, 0,
						      NULL);
	KUNIT_ASSERT_NOT_ERR_OR_NULL(test, plane);

	return plane;
}

```
