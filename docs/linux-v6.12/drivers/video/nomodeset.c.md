---
sidebar_position: 7
---
# nomodeset.c

### ファイル情報

- パス: `linux-v6.12/drivers/video/nomodeset.c`

### コンテンツ

```c
// SPDX-License-Identifier: GPL-2.0

#include <linux/module.h>
#include <linux/types.h>

#include <video/nomodeset.h>

static bool video_nomodeset;

bool video_firmware_drivers_only(void)
{
	return video_nomodeset;
}
EXPORT_SYMBOL(video_firmware_drivers_only);

static int __init disable_modeset(char *str)
{
	video_nomodeset = true;

	pr_warn("Booted with the nomodeset parameter. Only the system framebuffer will be available\n");

	return 1;
}

/* Disable kernel modesetting */
__setup("nomodeset", disable_modeset);

```
