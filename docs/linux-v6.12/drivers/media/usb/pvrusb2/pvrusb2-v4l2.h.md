---
sidebar_position: 41
---
# pvrusb2-v4l2.h

### ファイル情報

- パス: `linux-v6.12/drivers/media/usb/pvrusb2/pvrusb2-v4l2.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0-only */
/*
 *
 *  Copyright (C) 2005 Mike Isely <isely@pobox.com>
 */
#ifndef __PVRUSB2_V4L2_H
#define __PVRUSB2_V4L2_H

#include "pvrusb2-context.h"

struct pvr2_v4l2;

struct pvr2_v4l2 *pvr2_v4l2_create(struct pvr2_context *);

#endif /* __PVRUSB2_V4L2_H */

```
