---
sidebar_position: 45
---
# nouveau_ioctl.h

### ファイル情報

- パス: `linux-v6.12/drivers/gpu/drm/nouveau/nouveau_ioctl.h`

### コンテンツ

```h
/* SPDX-License-Identifier: MIT */
#ifndef __NOUVEAU_IOCTL_H__
#define __NOUVEAU_IOCTL_H__

long nouveau_compat_ioctl(struct file *, unsigned int cmd, unsigned long arg);
long nouveau_drm_ioctl(struct file *, unsigned int cmd, unsigned long arg);

#endif

```
