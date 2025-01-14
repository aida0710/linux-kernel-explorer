---
sidebar_position: 27
---
# v4l2-subdev-priv.h

### ファイル情報

- パス: `linux-v6.12/drivers/media/v4l2-core/v4l2-subdev-priv.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0-or-later */
/*
 * V4L2 sub-device pivate header.
 *
 * Copyright (C) 2023 Hans de Goede <hdegoede@redhat.com>
 */

#ifndef _V4L2_SUBDEV_PRIV_H_
#define _V4L2_SUBDEV_PRIV_H_

int v4l2_subdev_get_privacy_led(struct v4l2_subdev *sd);
void v4l2_subdev_put_privacy_led(struct v4l2_subdev *sd);

#endif

```
