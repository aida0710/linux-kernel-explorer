---
sidebar_position: 40
---
# uvc_v4l2.h

### ファイル情報

- パス: `linux-v6.12/drivers/usb/gadget/function/uvc_v4l2.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0 */
/*
 *	uvc_v4l2.h  --  USB Video Class Gadget driver
 *
 * Copyright (C) 2009-2010
 *		Laurent Pinchart (laurent.pinchart@ideasonboard.com)
 *
 * Copyright (c) 2013 Samsung Electronics Co., Ltd.
 *		http://www.samsung.com
 *		Author: Andrzej Pietrasiewicz <andrzejtp2010@gmail.com>
 */

#ifndef __UVC_V4L2_H__
#define __UVC_V4L2_H__

extern const struct v4l2_ioctl_ops uvc_v4l2_ioctl_ops;
extern const struct v4l2_file_operations uvc_v4l2_fops;

#endif /* __UVC_V4L2_H__ */

```
