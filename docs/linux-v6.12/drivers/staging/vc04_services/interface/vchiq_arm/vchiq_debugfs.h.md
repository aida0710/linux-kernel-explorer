---
sidebar_position: 9
---
# vchiq_debugfs.h

### ファイル情報

- パス: `linux-v6.12/drivers/staging/vc04_services/interface/vchiq_arm/vchiq_debugfs.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0 OR BSD-3-Clause */
/* Copyright (c) 2014 Raspberry Pi (Trading) Ltd. All rights reserved. */

#ifndef VCHIQ_DEBUGFS_H
#define VCHIQ_DEBUGFS_H

#include "vchiq_core.h"

struct vchiq_debugfs_node {
	struct dentry *dentry;
};

void vchiq_debugfs_init(struct vchiq_state *state);

void vchiq_debugfs_deinit(void);

void vchiq_debugfs_add_instance(struct vchiq_instance *instance);

void vchiq_debugfs_remove_instance(struct vchiq_instance *instance);

#endif /* VCHIQ_DEBUGFS_H */

```
