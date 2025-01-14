---
sidebar_position: 17
---
# release

### ファイル情報

- パス: `linux-v6.12/scripts/atomic/fallbacks/release`

### コンテンツ

```txt
cat <<EOF
	__atomic_release_fence();
	${retstmt}arch_${atomic}_${pfx}${name}${sfx}_relaxed(${args});
EOF

```
