---
sidebar_position: 13
---
# io.h

### ファイル情報

- パス: `linux-v6.12/fs/befs/io.h`

### コンテンツ

```h
/*
 * io.h
 */

struct buffer_head *befs_bread_iaddr(struct super_block *sb,
				     befs_inode_addr iaddr);

```
