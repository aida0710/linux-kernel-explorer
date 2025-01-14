---
sidebar_position: 16
---
# orangefs-debugfs.h

### ファイル情報

- パス: `linux-v6.12/fs/orangefs/orangefs-debugfs.h`

### コンテンツ

```h
/* SPDX-License-Identifier: GPL-2.0 */
void orangefs_debugfs_init(int);
void orangefs_debugfs_cleanup(void);
int orangefs_prepare_debugfs_help_string(int);
int orangefs_debugfs_new_client_mask(void __user *);
int orangefs_debugfs_new_client_string(void __user *);
int orangefs_debugfs_new_debug(void __user *);

```
