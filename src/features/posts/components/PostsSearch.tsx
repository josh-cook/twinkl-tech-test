interface PostsSearchProps {
  value: string;
  onChange: (value: string) => void;
}

export default function PostsSearch({ value, onChange }: PostsSearchProps) {
  return (
    <input
      type="search"
      aria-label="Search posts by title"
      placeholder="Search posts by title..."
      value={value}
      onChange={(event) => onChange(event.target.value)}
    />
  );
}
