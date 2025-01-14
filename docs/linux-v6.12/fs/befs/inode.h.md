---
sidebar_position: 11
---
# inode.h

### ファイル情報

- パス: `linux-v6.12/fs/befs/inode.h`

### コンテンツ

```h
/*
 * inode.h
 *
 */

int befs_check_inode(struct super_block *sb, befs_inode *raw_inode,
		     befs_blocknr_t inode);

```
