---
sidebar_position: 5
---
# o2cb

### ファイル情報

- パス: `linux-v6.12/Documentation/ABI/removed/o2cb`

### コンテンツ

```txt
What:		/sys/o2cb symlink
Date:		May 2011
KernelVersion:	3.0
Contact:	ocfs2-devel@lists.linux.dev
Description:	This is a symlink: /sys/o2cb to /sys/fs/o2cb. The symlink is
		removed when new versions of ocfs2-tools which know to look
		in /sys/fs/o2cb are sufficiently prevalent. Don't code new
		software to look here, it should try /sys/fs/o2cb instead.
Users:		ocfs2-tools. It's sufficient to mail proposed changes to
		ocfs2-devel@lists.linux.dev.

```
