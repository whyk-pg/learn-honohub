CREATE TABLE `todos` (
	`id` serial AUTO_INCREMENT NOT NULL,
	`status` boolean NOT NULL DEFAULT false,
	`message` text NOT NULL,
	`created_at` timestamp NOT NULL DEFAULT (now()),
	`updated_at` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `todos_id` PRIMARY KEY(`id`)
);
