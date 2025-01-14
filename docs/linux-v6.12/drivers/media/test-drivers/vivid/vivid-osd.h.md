---
sidebar_position: 20
---
# vivid-osd.h

### ファイル情報

- パス: `linux-v6.12/drivers/media/test-drivers/vivid/vivid-osd.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0-only */
/*
 * vivid-osd.h - output overlay support functions.
 *
 * Copyright 2014 Cisco Systems, Inc. and/or its affiliates. All rights reserved.
 */

#ifndef _VIVID_OSD_H_
#define _VIVID_OSD_H_

int vivid_fb_init(struct vivid_dev *dev);
void vivid_fb_release_buffers(struct vivid_dev *dev);
void vivid_clear_fb(struct vivid_dev *dev);

#endif

```
