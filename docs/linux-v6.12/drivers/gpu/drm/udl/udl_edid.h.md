---
sidebar_position: 6
---
# udl_edid.h

### ファイル情報

- パス: `linux-v6.12/drivers/gpu/drm/udl/udl_edid.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0-only */

#ifndef UDL_EDID_H
#define UDL_EDID_H

#include <linux/types.h>

struct drm_connector;
struct drm_edid;
struct udl_device;

bool udl_probe_edid(struct udl_device *udl);
const struct drm_edid *udl_edid_read(struct drm_connector *connector);

#endif

```
