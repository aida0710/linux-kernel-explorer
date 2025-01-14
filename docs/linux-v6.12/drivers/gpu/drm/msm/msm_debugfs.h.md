---
sidebar_position: 8
---
# msm_debugfs.h

### ファイル情報

- パス: `linux-v6.12/drivers/gpu/drm/msm/msm_debugfs.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0-only */
/*
 * Copyright (C) 2016 Red Hat
 * Author: Rob Clark <robdclark@gmail.com>
 */

#ifndef __MSM_DEBUGFS_H__
#define __MSM_DEBUGFS_H__

#ifdef CONFIG_DEBUG_FS
void msm_debugfs_init(struct drm_minor *minor);
#endif

#endif /* __MSM_DEBUGFS_H__ */

```
