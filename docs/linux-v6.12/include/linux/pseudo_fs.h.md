---
sidebar_position: 1026
---
# pseudo_fs.h

### ファイル情報

- パス: `linux-v6.12/include/linux/pseudo_fs.h`

### コンテンツ

```h
#ifndef __LINUX_PSEUDO_FS__
#define __LINUX_PSEUDO_FS__

#include <linux/fs_context.h>

struct pseudo_fs_context {
	const struct super_operations *ops;
	const struct xattr_handler * const *xattr;
	const struct dentry_operations *dops;
	unsigned long magic;
};

struct pseudo_fs_context *init_pseudo(struct fs_context *fc,
				      unsigned long magic);

#endif

```
