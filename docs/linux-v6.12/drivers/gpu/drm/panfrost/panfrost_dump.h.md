---
sidebar_position: 9
---
# panfrost_dump.h

### ファイル情報

- パス: `linux-v6.12/drivers/gpu/drm/panfrost/panfrost_dump.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0 */
/*
 * Copyright 2021 Collabora ltd.
 */

#ifndef PANFROST_DUMP_H
#define PANFROST_DUMP_H

struct panfrost_job;
void panfrost_core_dump(struct panfrost_job *job);

#endif

```
